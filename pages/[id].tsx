import LoadingComponent from "@/components/Global/LoadingComponent";
import { useMainStore } from "@/store/main.store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import HomeLayout from "@/components/Layouts/HomeLayout";
import { InvoiceType } from "@/data/types/InvoiceType";
import Link from "next/link";

const CreateInvoicePage = () => {
  const router = useRouter();
  const loading: boolean = useMainStore((store) => store?.loading);
  const updateLoading = useMainStore((store) => store?.updateLoading);

  const invoices = useMainStore((store) => store?.invoices);
  const setInvoices = useMainStore((store) => store?.setInvoices);
  const [invoiceData, setInvoiceData] = useState<InvoiceType | undefined>();

  const [values, setValues] = useState({
    customerName: "",
    productName: "",
    orderQuantity: 1,
    productPrice: 100,
  });

  useEffect(() => {
    updateLoading(true);
    const invoice = invoices?.find(
      (invoice) => invoice?.id === Number(`${router?.query?.id?.toString()}`)
    );
    // console.log(invoice);
    if (!invoice) {
      router?.replace("/");
    }
    setInvoiceData(invoice);
    setValues({
      customerName: invoice?.customerName || "",
      productName: invoice?.productName || "",
      orderQuantity: invoice?.orderQuantity || 1,
      productPrice: invoice?.productPrice || 100,
    });
    updateLoading(false);
  }, [router?.query?.id, setInvoiceData]);

  console.log(invoiceData);
  const schema = yup.object({
    customerName: yup.string().required("Customer name is required!"),
    productName: yup.string().required("Product name is required!"),
    orderQuantity: yup
      .string()
      .matches(/^\d+$/, "Numerical values only!")
      .required("Order quantity is required!"),
    productPrice: yup
      .string()
      .matches(/^\d+$/, "Numerical values only!")
      .required("Product price is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values: values,
    mode: "onSubmit",
  });

  const onSubmitHandler = async (values: any) => {
    console.log(values);
  };

  if (loading || !invoiceData) {
    return <LoadingComponent size={25} color="#36D399" override={{}} />;
  }

  return (
    <React.Fragment>
      <HomeLayout title="Invoice Details">
        <div className="pt-10 md:pt-0 pb-20 md:pb-12 w-full min-h-[calc(100vh-92px-220px)] flex flex-col items-center justify-start">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center">
            Invoice Details
          </h2>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="w-full my-4"
          >
            <div className="flex flex-col items-center mb-3">
              <label
                htmlFor="customerName"
                className="w-full align-left font-semibold text-sm mb-1"
              >
                Customer Name
              </label>
              <input
                id="customerName"
                className="bg-gray-100 appearance-none border-2 text-sm lg:text-base border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success focus:text-dark"
                type="text"
                placeholder="Customer Name"
                {...register("customerName", { required: true })}
              />
              {errors.customerName?.message ? (
                <p className="mt-0 mb-1 text-right w-full text-red-700 peer-invalid:invisible text-sm">
                  {errors.customerName?.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-center mb-3">
              <label
                htmlFor="productName"
                className="w-full align-left font-semibold text-sm mb-1"
              >
                Product Name
              </label>
              <input
                id="productName"
                className="bg-gray-100 appearance-none border-2 text-sm lg:text-base border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success focus:text-dark"
                type="text"
                placeholder="Product Name"
                {...register("productName", { required: true })}
              />
              {errors.productName?.message ? (
                <p className="mt-0 mb-1 text-right w-full text-red-700 peer-invalid:invisible text-sm">
                  {errors.productName?.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-center mb-3">
              <label
                htmlFor="productPrice"
                className="w-full align-left font-semibold text-sm mb-1"
              >
                Product Price
              </label>
              <input
                id="productPrice"
                className="bg-gray-100 appearance-none border-2 text-sm lg:text-base border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success focus:text-dark"
                type="number"
                placeholder="Product Price"
                {...register("productPrice", { required: true })}
              />
              {errors.productPrice?.message ? (
                <p className="mt-0 mb-1 text-right w-full text-red-700 peer-invalid:invisible text-sm">
                  {errors.productPrice?.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-center mb-3">
              <label
                htmlFor="orderQuantity"
                className="w-full align-left font-semibold text-sm mb-1"
              >
                Order Quantity
              </label>
              <input
                id="orderQuantity"
                className="bg-gray-100 appearance-none border-2 text-sm lg:text-base border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success focus:text-dark"
                type="number"
                placeholder="Order Quantity"
                {...register("orderQuantity", { required: true })}
              />
              {errors.orderQuantity?.message ? (
                <p className="mt-0 mb-1 text-right w-full text-red-700 peer-invalid:invisible text-sm">
                  {errors.orderQuantity?.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-5 gap-x-0 sm:gap-x-2 gap-y-3 sm:gap-y-0">
              <Link
                href="/"
                className="w-12/12 sm:w-6/12 btn btn-md btn-outline order-2 sm:order-1"
              >
                Back
              </Link>
              <button
                role="submit"
                className="w-12/12 sm:w-6/12 btn btn-md text-white btn-success order-1 sm:order-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </HomeLayout>
    </React.Fragment>
  );
};

export default CreateInvoicePage;
