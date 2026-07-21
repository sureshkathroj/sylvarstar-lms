import { useEffect, useState } from "react";

import PageHeader from "../../../shared/components/layout/PageHeader";
import EmptyState from "../../../shared/components/feedback/EmptyState";
import EnquiryTable from "../components/EnquiryTable";
import { enquiryService } from "../services/enquiry.service";
import type { Enquiry } from "../types/enquiry.types";
import { Button } from "@/components/ui/button";
import StudentDialog from "@/features/students/components/StudentDialog";



export default function EnquiriesPage() {

  const [studentDialogOpen, setStudentDialogOpen] = useState(false);

  const [studentDialogMode, setStudentDialogMode] = useState<
    "create" | "convert"
  >("create");

  const [selectedEnquiry, setSelectedEnquiry] =
    useState<Enquiry | undefined>();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  const [loading, setLoading] = useState(true);

  const handleCreateStudent = () => {
    setStudentDialogMode("create");
    setSelectedEnquiry(undefined);
    setStudentDialogOpen(true);
  };
  const handleConvertStudent = (enquiry: Enquiry) => {
    setStudentDialogMode("convert");
    setSelectedEnquiry(enquiry);
    setStudentDialogOpen(true);
  };

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
        actions={
          <Button onClick={handleCreateStudent}>
            Create Student
          </Button>
        }
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
          <EnquiryTable
            enquiries={enquiries}
            onConvert={handleConvertStudent}
          />
        </div>
      )}

      <StudentDialog
  open={studentDialogOpen}
  onOpenChange={setStudentDialogOpen}
  mode={studentDialogMode}
  enquiry={selectedEnquiry}
  onSuccess={async () => {
    setStudentDialogOpen(false);

    const data = await enquiryService.getEnquiries();
    setEnquiries(data);
  }}
/>

    </div>
  );
}