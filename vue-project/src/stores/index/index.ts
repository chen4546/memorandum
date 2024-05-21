import { defineStore } from "pinia";
import type { MemoType } from "./type";
import type { CatalogType } from "./type";
import { geneId, localSetItem, localGetItem } from "@/untils";
const indexStore = defineStore("index", {
  state: () => ({
    catalogs: [] as CatalogType[],
    memos: [] as MemoType[],
    active_cataid: null as number | null,
    active_memoid: null as number | null,
  }),

  actions: {
    //获取目录列表
    getCatalogs() {
      let data = localGetItem("catalogs");
      if (data) {
        this.catalogs = data;
      }
    },
    setCataId(id: number | null) {
      this.active_cataid = id;
      localSetItem("active_cataid", id);
    },
    //创建目录
    createCata(val: Pick<CatalogType, "user_id" | "cata_name">) {
      let curcata = Object.assign({}, val, {
        cata_id: geneId(),
      });
      this.catalogs.push(curcata);
      localSetItem("catalogs", this.catalogs);
    },
    //获取备忘录列表
    getMemos() {
      let data = localGetItem("memos");
      if (data) {
        this.memos = data;
      }
    },
    //创建备忘录
    creatMemo(val: Pick<MemoType, "title" | "cata_id" | "content">) {
      let memo = Object.assign({}, val, {
        memo_id: geneId(),
        update_at: new Date().valueOf(),
      });
      this.memos.push(memo);
      localSetItem("memos", this.memos);
    },
    //
    updateMemo(id: number, data: Partial<MemoType>) {},
    //
    removeMemo(id: number) {},
    setMemoId(id: number | null) {
      this.active_memoid = id;
      localSetItem("active_memoid", id);
    },
    getActiveId() {},
  },
  getters: {
    activeMemos: (state) =>
      state.memos.filter((r) => r.cata_id == state.active_cataid),
  },
});
export default indexStore;
