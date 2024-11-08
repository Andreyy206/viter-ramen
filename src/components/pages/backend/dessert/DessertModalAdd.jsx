import { ImagePlusIcon, Type, X } from "lucide-react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/storeAction";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "Yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { InputText } from "@/components/helpers/formInputs";
import SpinnerButton from "../partials/spinners/SpinnerButton";

const DessertModalAdd = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/dessert/${itemEdit.dessert_aid}` : `/v1/dessert`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["dessert"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record ${itemEdit ? "Updated" : "Added"}`));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    dessert_title: itemEdit ? itemEdit.dessert_title : "",
    dessert_price: itemEdit ? itemEdit.dessert_price : "",
    dessert_description: itemEdit ? itemEdit.dessert_description : "",
    dessert_title_old: itemEdit ? itemEdit.dessert_title : "",
  };

  const yupSchema = Yup.object({
    dessert_title: Yup.string().required("Required"),
    dessert_price: Yup.string().required("Required"),
    dessert_description: Yup.string().required("Required"),
  });

  return (
    <ModalWrapper>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          mutation.mutate(values);
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className='modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft'>
                <div className='modal-header p-3 px-4 pb-0 flex justify-between items-center self-start'>
                  <h5 className='mb-0'>{itemEdit ? "Edit" : "Add"} Dessert</h5>
                  <button onClick={handleClose}>
                    <X />
                  </button>
                </div>

                <div className='modal-body  p-3 px-4 '>
                  <div className='input-wrap'>
                    <InputText
                      label='Dessert'
                      type='Text'
                      name='dessert_title'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputText
                      label='Price'
                      type='text'
                      name='dessert_price'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap relative'>
                    <InputText
                      label='Description'
                      type='text'
                      name='dessert_description'
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className='modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start'>
                  <button
                    className='btn btn-accent min-w-[90px] flex justify-center'
                    type='submit'
                  >
                    {mutation.isPending ? <SpinnerButton /> : "Save"}
                  </button>
                  <button
                    className='btn btn-cancel min-w-[90px] flex justify-center'
                    type='reset'
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </ModalWrapper>
  );
};

export default DessertModalAdd;
