import { FaStar } from "react-icons/fa";

const Comment = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-b border-gray-300 pb-6 mt-4 font-shabnam">
      {/* Avatar */}
      <img
        src="/images/shahin.jpg"
        alt="user avatar"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
      />

      {/* Comment Details */}
      <div className="flex-1">
        {/* User Info and Stars */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex gap-2 items-baseline">
            <strong className="text-sm sm:text-base">shahin</strong>
            <p className="text-xs sm:text-sm text-gray-500">۲۸ آذر ۱۴۰۱</p>
          </div>

          <div className="flex gap-1 text-orange-500 mt-2 sm:mt-0">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        {/* Comment Text */}
        <p className="mt-2 text-sm sm:text-base">
          قهوه بسیار خوش عطر و طعمیه…کاش کم کم مدل های کپسول ها رو متنوع تر کنید.
        </p>
      </div>
    </section>
  );
};

export default Comment;
