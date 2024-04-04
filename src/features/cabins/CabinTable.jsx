import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
	const { isLoading, data: cabins } = useQuery({
		queryKey: ["cabins"],
		queryFn: getCabins,
	});

	const [searchParams] = useSearchParams();

	const filterValue = searchParams.get("discount") || "all";

	let filteredCabins;
	if (filterValue === "all") filteredCabins = cabins;
	if (filterValue === "no-discount")
		filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
	if (filterValue === "with-discount")
		filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

	if (isLoading) return <Spinner />;
	return (
		<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
			<Table.Header>
				<div></div>
				<div>Cabin</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div></div>
			</Table.Header>
			<Table.Body
				// data={cabins}
				data={filteredCabins}
				render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
			/>
		</Table>
	);
}

export default CabinTable;
