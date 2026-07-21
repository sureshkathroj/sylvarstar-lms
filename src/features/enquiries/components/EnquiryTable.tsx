import type { Enquiry } from "../types/enquiry.types";
import EnquiryStatusBadge from "./EnquiryStatusBadge";

interface EnquiryTableProps {
  enquiries: Enquiry[];
  onConvert: (enquiry: Enquiry) => void;
}

export default function EnquiryTable({
  enquiries,
  onConvert,
}: EnquiryTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Academy</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.map((enquiry) => (
            <tr
              key={enquiry.id}
              className="border-t"
            >
              <td className="p-4">{enquiry.name}</td>
              <td className="p-4">{enquiry.academy}</td>
              <td className="p-4">{enquiry.phone}</td>

              <td className="p-4">
                <EnquiryStatusBadge
                  status={enquiry.status}
                />
              </td>
              <td className="p-4">
                <button
                  className="text-blue-500"
                  onClick={() => onConvert(enquiry)}
                >
                  Convert
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}