import { Pagination, PaginationItem } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { AppTable} from "../../../shared/ui/AppTable/AppTable";
import { useGetDataPage } from "../api/getPage";
import { NotFoundPage } from "../../NotFoundPage";


export function TablePage() {
    const {records, currentPage, totalPages} = useGetDataPage()
    const [searchParams, setSearchParams] = useSearchParams();

   
    const handlePaginationClick = (page: number | null) => {
        searchParams.set("page", `${page}`);
        setSearchParams(searchParams)
    }

    return (
        <div>
             
            {records.length !== 0 && (
                <>
                <Pagination page={currentPage} count={totalPages} showFirstButton showLastButton 
                 renderItem={(item) => (
                <PaginationItem
                    {...item}
                    onClick={() => handlePaginationClick(item.page)}
                />
            )} sx={{mb: 2}}/>
            <AppTable records={records} />
            </>)}
           
           
        </div>
    );
}
