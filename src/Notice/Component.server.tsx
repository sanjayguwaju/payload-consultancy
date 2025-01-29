import { getNotices } from "@/actions/notice-actions"

export default async function Page() {
  const aaa = await getNotices()
  console.log(aaa);

  return []
}
