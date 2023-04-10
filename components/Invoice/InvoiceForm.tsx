import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMainStore } from "@/store/main.store";

const InvoiceForm = () => {
  const updateLoading = useMainStore((store) => store?.updateLoading);

  const invoices = useMainStore((store) => store?.invoices);
  const setInvoices = useMainStore((store) => store?.setInvoices);

  const locModOpen = useMainStore((store) => store?.locModOpen);
  const setLocModOpen = useMainStore((store) => store?.setLocModOpen);

  const [values, setValues] = useState({
    customerName: "",
    productName: "",
    orderQuantity: 1,
    productPrice: 100,
  });

  const schema = yup.object({
    number: yup.number().required("Invoice number is required!"),
    customerName: yup.string().required("Customer name is required!"),
    productName: yup.string().required("Product name is required!"),
    orderQuantity: yup.number().required("Order quantity is required!"),
    productPrice: yup.number().required("Product price is required!"),
    totalPrice: yup.number().required("Total price is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    values: values,
    mode: "onSubmit",
  });

  const onSubmitHandler = (values: any) => {
    console.log(values);

    // resetForm();
  };

  const resetForm = () => {
    reset();
    setLocModOpen(false);
  };
  return (
    <React.Fragment>
      <input
        type="checkbox"
        id="my-modal-6"
        checked={locModOpen}
        className="modal-toggle"
        onChange={() => setLocModOpen(!locModOpen)}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h3 className="font-bold text-base lg:text-xl text-success mb-2 text-center">
              Create Invoice
            </h3>
            <div className="flex flex-col items-center">
              <label
                htmlFor="customerName"
                className="w-full align-left font-semibold text-sm mb-1"
              >
                Customer Name
              </label>
              <input
                id="customerName"
                className="mb-3 bg-gray-100 appearance-none border-2 text-sm lg:text-base border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success focus:text-dark"
                type="text"
                placeholder="Customer Name"
                {...register("customerName", { required: true })}
              />
              {errors.customerName?.message ? (
                <p className="my-0 text-red-700 peer-invalid:invisible text-sm">
                  {errors.customerName?.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-center">
              <label
                htmlFor="productName"
                className="w-full align-left font-semibold text-sm mb-1"
              >
                Product Name
              </label>
              <input
                id="productName"
                className="mb-3 bg-gray-100 appearance-none border-2 text-sm lg:text-base border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success focus:text-dark"
                type="text"
                placeholder="Product Name"
                {...register("productName", { required: true })}
              />
              {errors.productName?.message ? (
                <p className="my-0 text-red-700 peer-invalid:invisible text-sm">
                  {errors.productName?.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-center">
              <label
                htmlFor="productPrice"
                className="w-full align-left font-semibold text-sm mb-1"
              >
                Product Price
              </label>
              <input
                id="productPrice"
                className="mb-3 bg-gray-100 appearance-none border-2 text-sm lg:text-base border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success focus:text-dark"
                type="number"
                placeholder="Product Price"
                {...register("productPrice", { required: true })}
              />
              {errors.productPrice?.message ? (
                <p className="my-0 text-red-700 peer-invalid:invisible text-sm">
                  {errors.productPrice?.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-center">
              <label
                htmlFor="orderQuantity"
                className="w-full align-left font-semibold text-sm mb-1"
              >
                Order Quantity
              </label>
              <input
                id="orderQuantity"
                className="mb-3 bg-gray-100 appearance-none border-2 text-sm lg:text-base border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success focus:text-dark"
                type="number"
                placeholder="Order Quantity"
                {...register("orderQuantity", { required: true })}
              />
              {errors.orderQuantity?.message ? (
                <p className="my-0 text-red-700 peer-invalid:invisible text-sm">
                  {errors.orderQuantity?.message}
                </p>
              ) : null}
            </div>
            <div className="modal-action">
              <button onClick={resetForm} className="btn btn-md btn-outline">
                Cancel
              </button>
              <button
                role="submit"
                className="btn btn-md text-white btn-success"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InvoiceForm;
