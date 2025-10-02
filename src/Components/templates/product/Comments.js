import Comment from "@/Components/modules/Comment/Commnet";
import CommentForm from "./CommentForm";

const Comments = ({productID , comments}) => {

  
  return (
    <div className="w-full mt-6">
      <p className="font-myfont font-Bold text-base mb-2"> ({comments.length}) نظر:</p>
      <hr className="mb-6" />

      <main className="flex flex-col lg:flex-row gap-6">
        {/* User Comments */}
        <div className="w-full lg:w-1/2 space-y-4">
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
          <CommentForm productID={productID}/>
        </div>
      </main>
    </div>
  );
};

export default Comments;
