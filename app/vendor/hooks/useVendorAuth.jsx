"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useVendorAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("vendorToken");
    console.log("Token from localStorage:", token);
    if (!token) {
      router.replace("/vendor/login");
      return;
    }

    fetch("http://localhost:4000/api/vendor/verify", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        if (data.role !== "vendor") {
          router.replace("/vendor/login");
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        router.replace("/vendor/login");
      });
  }, [router]);

  return loading;
}
