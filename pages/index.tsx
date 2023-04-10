import LoadingComponent from "@/components/Global/LoadingComponent";
import FileIcon from "@/components/Icons/FileIcon";
import TrashIcon from "@/components/Icons/TrashIcon";
import HomeLayout from "@/components/Layouts/HomeLayout";
import { useMainStore } from "@/store/main.store";
import { showError, showSuccess } from "@/utils/notification";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

export default function LocationsPage() {
  const router = useRouter();

  const loading = useMainStore((store) => store?.loading);
  const updateLoading = useMainStore((store) => store?.updateLoading);
  const setInvoices = useMainStore((store) => store?.setInvoices);
  const invoices = useMainStore((store) => store?.invoices);

  useEffect(() => {
    updateLoading(false);
  }, [invoices]);

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    try {
      const filterInvoices = invoices?.filter((invoice) => invoice?.id !== id);
      setInvoices(filterInvoices);
      showSuccess("Invoice has been deleted successfully!");
    } catch (error: any) {
      console.log(error);
      showError(error?.response?.data?.message);
    }
  };

  if (loading) {
    return <LoadingComponent size={25} color="#36D399" override={{}} />;
  }

  return (
    <React.Fragment>
      <HomeLayout title="List of Invoices">
        <div className="pt-10 md:pt-0 pb-20 md:pb-12 w-full min-h-[calc(100vh-92px-220px)] flex flex-col items-center justify-start">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center">
            List of Invoices
          </h2>
          <div className="w-full pt-8 pb-4 flex flex-col sm:flex-row justify-end items-center gap-y-1 sm:gap-y-0 gap-x-0 sm:gap-x-2">
            <Link
              href="/create"
              className="btn btn-sm w-full sm:w-2/12 mt-2 sm:mt-0"
            >
              CREATE
            </Link>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full overflow-x-auto">
              <thead>
                <tr>
                  <th className="hidden md:table-cell">Date Issued</th>
                  <th className="hidden md:table-cell">Invoice #</th>
                  <th className="hidden md:table-cell">Customer Name</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Order Quantity</th>
                  <th>Total Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices?.map((invoice) => (
                  <tr key={invoice?.id}>
                    <td className="hidden md:table-cell">
                      {moment(invoice?.date).format("MMM DD YYYY")}
                    </td>
                    <td className="hidden md:table-cell">00{invoice?.id}</td>
                    <td className="hidden md:table-cell">
                      {invoice?.customerName}
                    </td>
                    <td>{invoice?.productName}</td>
                    <td>{invoice?.productPrice?.toLocaleString()}</td>
                    <td>{invoice?.orderQuantity?.toLocaleString()}</td>
                    <td>{invoice?.totalPrice?.toLocaleString()}</td>
                    <td className="flex">
                      <FileIcon
                        className="w-[35px] h-[35px] stroke-white"
                        style={{}}
                        onClick={() => router.push(`/${invoice?.id}`)}
                      />
                      <TrashIcon
                        className="w-[35px] h-[35px] "
                        style={{}}
                        onClick={(e: any) => handleDelete(e, invoice?.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </HomeLayout>
    </React.Fragment>
  );
}
