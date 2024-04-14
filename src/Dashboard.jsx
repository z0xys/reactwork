import { Card, Box, Flex, Text, Heading } from "@radix-ui/themes";

const Dashboard = () => {

	return (
		<div className="p-5">
			<h1 className="text-4xl font-bold pb-5">Dashboard</h1>
			<div className="flex flex-row justify-center space-x-4">
				<Card size={"5"}>
					<div className="min-w-40 text-center">
						<div className="text-3xl font-semibold px-10">123</div>
						<div>Projects</div>
					</div>

				</Card>
				<Card size={"5"}>
					<div className="min-w-40 text-center">
						<div className="text-3xl font-semibold text-center">1323</div>
						<div>Stores</div>
					</div>
				</Card>
				<Card size={"5"}>
				<div className="min-w-40 text-center">
					<div className="text-3xl font-semibold text-center">7</div>
					<div>Site Locations</div>
				</div>
				</Card>
				<Card size={"5"}>
				<div className="min-w-40 text-center">
					<div className="text-3xl font-semibold text-center">56</div>
					<div >Suppliers</div>
				</div>
				</Card >
			</div>
		</div>

	)
}

export default Dashboard;