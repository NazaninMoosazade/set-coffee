import { FaStar , FaRegStar} from "react-icons/fa";

const Comment = ({ username , body , score , date}) => {
  
  return (
    <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-b border-gray-300 pb-6 mt-4 font-shabnam">
   

      {/* Comment Details */}
      <div className="flex-1">
        {/* User Info and Stars */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex gap-2 items-baseline">
            <strong className="font-myfont font-Bold text-sm sm:text-base">{username}</strong>
            <p className="font-myfont font-Light text-xs sm:text-sm text-gray-500">{new Date(date).toLocaleDateString("fa-IR")}  </p>
          </div>

          <div className="flex gap-1 text-orange-500 mt-2 sm:mt-0">
               {
                        new Array(score).fill(0).map((item , index) =>  (
                          <FaStar key={index}/>
                        ))
                      }
                      {
                        new Array(5 - score).fill(0).map((item , index) =>  (
                          <FaRegStar key={index}/>
                        ))
                      }
          </div>
        </div>

        {/* Comment Text */}
        <p className="font-myfont font-Mediom mt-2 text-sm sm:text-base">{body}</p>
      </div>
    </section>
  );
};

export default Comment;
