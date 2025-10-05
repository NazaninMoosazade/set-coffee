// app/api/auth/signup/route.js
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/global/auth";
import { roles } from "@/utils/contans";

export async function POST(req) {
  await connectToDB();
  const body = await req.json();
  const { name, phone, email, password } = body;

  // چک کن ببین یوزر از قبل وجود داره
  const isUserExist = await UserModel.findOne({
    $or: [{ name }, { email }, { phone }],
  });

  if (isUserExist) {
    return Response.json(
      { message: "The username, email or phone already exists!" },
      { status: 422 }
    );
  }

  // هش کردن پسورد
  const hashedPassword = await hashPassword(password);

  // ایجاد یوزر
  const users = await UserModel.find({});
  const newUser = await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: users.length > 0 ? roles.USER : roles.ADMIN,
  });

  // ایجاد توکن فقط با email (تا با authUser فعلی سازگار باشه)
  const accessToken = generateAccessToken({ email: newUser.email });

  // پاسخ با ست کردن کوکی
  return Response.json(
    {
      message: "User signed up successfully!",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      },
    },
    {
      status: 201,
      headers: {
        "Set-Cookie": `token=${accessToken}; Path=/; HttpOnly=true; SameSite=Lax`,
      },
    }
  );
}


// import connectToDB from "@/configs/db";
// import UserModel from "@/models/User";
// // import { generateAccessToken, hashPassword } from "@/utils/auth";
// import { generateAccessToken , hashPassword } from "@/utils/global/auth";
// import { roles } from "@/utils/contans";

// export async function POST(req) {
//   await connectToDB();
//   const body = await req.json();
//   const { name, phone, email, password } = body;

//   // Validation

//   const isUserExist = await UserModel.findOne({
//     $or: [{ name }, { email }, { phone }],
//   });

//   if (isUserExist) {
//     return Response.json(
//       {
//         message: "The username or email or phone exist already !!",
//       },
//       {
//         status: 422,
//       }
//     );
//   }

//   const hashedPassword = await hashPassword(password);
//   const accessToken = generateAccessToken({ name });

//   const users = await UserModel.find({});

//   await UserModel.create({
//     name,
//     email,
//     phone,
//     password: hashedPassword,
//     role: users.length > 0 ? roles.USER : roles.ADMIN,
//   });

//   return Response.json(
//     { message: "User signed up successfully :))" },
//     {
//       status: 201,
//       headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
//     }
//   );
// }
