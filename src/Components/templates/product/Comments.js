import Comment from "@/Components/modules/Comment/Commnet";
import CommentForm from "./CommentForm";

const Comments = ({comments}) => {

  
  return (
    <div className="w-full mt-6">
      <p className="text-base font-semibold mb-2"> ({comments.length}) نظر:</p>
      <hr className="mb-6" />

      <main className="flex flex-col lg:flex-row gap-6">
        {/* User Comments */}
        <div className="w-full lg:w-1/2 space-y-4">
          {/* <p className="font-semibold text-sm lg:text-base">
            {comments.length} دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD )
            ده -10- عددی
          </p> */}
          <div className="space-y-4">
            {
              comments.map((comment , id) => (
            <Comment key={comment._id} {...comment} />
              ))
            }


          </div>
        </div>

        {/* Comment Form */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-4 rounded-lg shadow-sm">
          <CommentForm />
        </div>
      </main>
    </div>
  );
};

export default Comments;
