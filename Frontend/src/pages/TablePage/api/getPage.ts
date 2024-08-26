import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useGetAllDataQuery } from "../../../app/providers/StoreProvider/services/data";
import { selectCurrentPage, selectTotalPages, selectRecords } from "../../../entities/Data/model/slice/dataSlice";


export function useGetDataPage() {
    const {search} = useLocation();
    useGetAllDataQuery(search);
    const currentPage = useSelector(selectCurrentPage)
    const totalPages = useSelector(selectTotalPages)
    const records = useSelector(selectRecords)
    return {records,currentPage, totalPages}
}