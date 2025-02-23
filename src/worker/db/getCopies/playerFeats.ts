import { getAll, idb } from "..";
import { mergeByPk } from "./helpers";
import type { GetCopyType, PlayerFeat } from "../../../common/types";

const getCopies = async (
	options: any = {},
	type?: GetCopyType,
): Promise<PlayerFeat[]> => {
	return mergeByPk(
		await getAll(idb.league.transaction("playerFeats").store),
		await idb.cache.playerFeats.getAll(),
		"playerFeats",
		type,
	);
};

export default getCopies;
