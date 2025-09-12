import Layout from "@/Components/layouts/UserPanelLayout";
import Box from "@/Components/templates/p-user/index/Box";
import Tickets from "@/Components/templates/p-user/index/Tickets";
import Orders from "@/Components/templates/p-user/index/Orders";

const Page = () => {
  return (
    <Layout>
      <main>
        {/* بخش باکس‌ها */}
        <section className="flex flex-wrap gap-5 mt-12 px-10">
          <Box title="مجموع تیکت ها " value="20" />
          <Box title="مجموع کامنت ها " value="0" />
          <Box title="مجموع سفارشات" value="2" />
          <Box title="مجموع علاقه مندی ها" value="10" />
        </section>

        {/* بخش محتواها */}
        <section className="flex gap-2.5 p-10">
           <Tickets />
          <Orders /> 
        </section>
      </main>
    </Layout>
  );
};

export default Page;
