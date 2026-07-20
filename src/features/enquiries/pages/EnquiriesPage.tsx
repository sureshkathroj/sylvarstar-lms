import { useEffect, useState } from "react";

import PageHeader from "../../../shared/components/layout/PageHeader";
import EmptyState from "../../../shared/components/feedback/EmptyState";

import { enquiryService } from "../services/enquiry.service";
import type { Enquiry } from "../types/enquiry.types";

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await enquiryService.getEnquiries();
         console.log("Enquiries:", data);
        setEnquiries(data);
         } catch (err) {
    console.error(err);
  
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="space-y-8">

      <PageHeader
        title="Enquiries"
        description="Manage student enquiries"
      />

     {loading && <p>Loading...</p>}

{!loading && enquiries.length === 0 && (
  <EmptyState
    title="No Enquiries"
    description="Enquiries submitted from the website will appear here."
  />
)}

{!loading && enquiries.length > 0 && (
  <div className="space-y-4">
    {enquiries.map((enquiry) => (
      <div
        key={enquiry.id}
        className="rounded-lg border bg-white p-4 shadow-sm"
      >
        <h3 className="font-semibold">{enquiry.name}</h3>

        <p>{enquiry.email}</p>

        <p>{enquiry.phone}</p>

        <p>{enquiry.message}</p>

        <p>{enquiry.status}</p>
      </div>
    ))}
  </div>
)}

      {/* {!loading && enquiries.length === 0 && (
        <EmptyState
          title="No Enquiries"
          description="Enquiries submitted from the website will appear here."
        />
      )} */}

    </div>
  );
}