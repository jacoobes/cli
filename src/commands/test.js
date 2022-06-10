//@ts-check
import { readFile, writeFile } from 'node:fs/promises';
import { findUp } from 'find-up';

/**
 * @param {string} name
 */
export async function editMain(name) {
	const pjLocation = await findUp('package.json');
	const output = JSON.parse(await readFile(pjLocation, 'utf8'));
	if (!output) throw new Error("Can't read your package.json.");

	output.main = name;

	return writeFile(pjLocation, JSON.stringify(output, null, 2));
}