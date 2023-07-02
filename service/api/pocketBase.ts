import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export const getBlogsList = async () => {
  await pb.admins.authWithPassword(
    process.env.NEXT_PUBLIC_POCKETBASE_EMAIL!,
    process.env.NEXT_PUBLIC_POCKETBASE_PASS!
  );

  const data = await pb.collection("blogsList").getList(1, 50, {});

  return data.items;
};
