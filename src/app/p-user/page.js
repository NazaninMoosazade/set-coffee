import Layout from "@/Components/layouts/UserPanelLayout";
import Box from "@/Components/templates/p-user/index/Box";
import Tickets from "@/Components/templates/p-user/index/Tickets";
import Orders from "@/Components/templates/p-user/index/Orders";
import { authUser } from "@/utils/Server/auth";

import TicketModel from "@/models/Ticket";
import CommentModel from "@/models/Comment";
import WishlistModel from "@/models/Wishlist";

const Page = async () => {
  const user = await authUser();

  const tickets = await TicketModel.find({ user: user._id })
    .limit(3)
    .populate("department", "title")
    .sort({ _id: -1 })
    .lean();

  
  const allTickets = await TicketModel.find({ user: user._id });
  const comments = await CommentModel.find({ user: String(user._id) });
  const wishes = await WishlistModel.find({ user: user._id });

  return (
    <Layout>
      <main>
        {/* بخش باکس‌ها */}
        <section className="flex flex-wrap gap-5 mt-12 px-10">
          <Box title="مجموع تیکت ها" value={allTickets.length} />
          <Box title="مجموع کامنت ها" value={comments.length} />
          <Box title="مجموع سفارشات" value="0" /> 
          <Box title="مجموع علاقه‌مندی ها" value={wishes.length} />
        </section>

        {/* بخش محتواها */}
        <section className="flex gap-2.5 p-10">
          <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
          <Orders />
        </section>
      </main>
    </Layout>
  );
};

export default Page;
