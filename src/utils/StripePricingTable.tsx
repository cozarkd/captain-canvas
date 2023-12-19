"use client";
import React, { useEffect } from "react";

type StripePricingTableProps = {
  pricingTableId: string;
  publishableKey: string;
};

const StripePricingTable: React.FC<StripePricingTableProps> = ({ pricingTableId, publishableKey }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement("stripe-pricing-table", {
    "pricing-table-id": pricingTableId,
    "publishable-key": publishableKey,
  });
};

export default StripePricingTable;
