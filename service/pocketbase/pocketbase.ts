import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export const authPocketBase = async () => {
  await pb.admins.authWithPassword(
    process.env.NEXT_PUBLIC_POCKETBASE_EMAIL!,
    process.env.NEXT_PUBLIC_POCKETBASE_PASS!
  );
};

export const getBlogsList = async () => {
  // await authPocketBase();
  try {
    const data = await pb.collection("blogsList").getList(1, 50, {});
    // console.log(data);
    return data.items;
  } catch (error: any) {
    console.log(error);
  }
};

export const getGalleryImages = async (id: string) => {
  // await authPocketBase();
  const record = await pb.collection("galleryImages").getOne(id);
  return record;
};

// export const getBlog = async (pathName: string) => {
//   await pb.collection("users").getFirstListItem(pathName);
// };

// export const getBlogsList = async () => {
//   export const getBlogsList = async () => {
//     // await authPocketBase();
//     const data = await pb.collection("blogsList").getList(1, 50, {});
//     return data.items;
//   };
// };
