import React from "react";
import LoaderTable from "../../partials/LoaderTable";
import NoData from "../../partials/icons/NoData";
import ServerError from "../../partials/icons/ServerError";
import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  Pencil,
  Trash,
} from "lucide-react";
import Pill from "../../partials/Pill";
import MopModalAdd from "./MopModalAdd";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
} from "@/components/store/storeAction";
import SpinnerTable from "../../partials/spinners/SpinnerTable";
import ModalConfirm from "../../partials/modals/ModalConfirm";
import ModalDelete from "../../partials/modals/ModalDelete";
import ModalValidate from "../../partials/modals/ModalValidate";
import useQueryData from "@/components/custom-hook/useQueryData";
import ToastSuccess from "../../partials/ToastSuccess";

const Mop = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [isActive, setIsActive] = React.useState(0);
  const [itemEdit, setItemEdit] = React.useState(null);

  let counter = 0;
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/mop`, // endpoint
    "get", // method
    "mop"
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(0);
    setId(item.mop_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(1);
    setId(item.mop_aid);
  };

  return (
    <>
      <section>
        <button className='btn btn-accent' onClick={handleAdd}>
          Add New
        </button>
        <div className='table_wrapper bg-primary p-4 mt-5 rounded-md relative'>
          {!isLoading || (isFetching && <SpinnerTable />)}
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>Status</td>
                <td>Title</td>
                <td></td>
              </tr>
            </thead>

            <tbody>
              {((isLoading && !isFetching) || result?.data.length === 0) && (
                <tr>
                  <td colSpan='100%'>
                    {isLoading ? (
                      <LoaderTable count={30} cols={6} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td colSpan='100%'>
                    <ServerError />
                  </td>
                </tr>
              )}
              {result?.data.map((item, key) => {
                counter++;
                return (
                  <tr key={key}>
                    <td className="w-10">{counter}. </td>
                    <td className="w-20">{item.mop_title} </td>
                    <td>
                      <Pill isActive={item.mop_is_active} />
                    </td>
                    <td>
                      <ul className='table-action'>
                        {item.mop_is_active ? (
                          <>
                            <li>
                              <button
                                data-tooltip='Edit'
                                onClick={() => handleEdit(item)}
                              >
                                <Pencil size={15} />
                              </button>
                            </li>
                            <li>
                              <button
                                data-tooltip='Archive'
                                onClick={() => handleArchive(item)}
                              >
                                <Archive size={15} />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                data-tooltip='Restore'
                                onClick={() => handleRestore(item)}
                              >
                                <ArchiveRestore size={15} />
                              </button>
                            </li>
                            <li>
                              <button
                                data-tooltip='Delete'
                                onClick={() => handleDelete()}
                              >
                                <Trash size={15} />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {store.isAdd && <MopModalAdd itemEdit={itemEdit} />}
      {store.isConfirm && (
        <ModalConfirm
          queryKey='mop'
          mysqlApiArchive={`/v1/mop/active/${id}`}
          active={isActive}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v1/mop/${id}`}
          queryKey='mop'
        />
      )}

      {store.success && <ToastSuccess />}
      {store.validate && <ModalValidate />}
    </>
  );
};

export default Mop;
