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
  const data = await pb.collection("blogsList").getList(1, 50, {});

  return data.items;
};

export const getGalleryImages = async (id: string) => {
  const record = await pb.collection("galleryImages").getOne(id);

  return record;
};
