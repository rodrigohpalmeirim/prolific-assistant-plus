// Usage: bun run test-reserve.ts <access_token> <study_id> <participant_id> <fingerprint>

declare const Bun: any;
declare const process: any;

const args = Bun.argv.slice(2); // Skip 'bun' and script name

if (args.length < 3) {
    console.error("Usage: bun run test-reserve.ts <access_token> <study_id> <participant_id>\n Remember to add your fingerprint in the code");
    console.error("Example: bun run test-reserve.ts 'your_token' 'study123' 'participant456'");
    process.exit(1);
}

let [accessToken, studyId, participantId] = args;

let fingerprint = {
	"fingerprint": {
		"detail": "your_fp_detail_string",
		"vid": "your_fp_vid_string"
	}
}

console.log("Making request with:");
console.log("  Study ID:", studyId);
console.log("  Participant ID:", participantId);
console.log("  Fingerprint:", fingerprint);
console.log("  Token:", accessToken.substring(0, 10) + "...");
console.log();

try {
    const response = await fetch("https://internal-api.prolific.com/api/v1/submissions/reserve/", {
        headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en,en-US;q=0.9,pt;q=0.8",
            authorization: "Bearer " + accessToken,
            "content-type": "application/json",
            "x-prolific-id": participantId,
        },
        referrer: "https://app.prolific.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: JSON.stringify({
            "study_id": studyId,
            "participant_id": participantId,
            fingerprint: fingerprint,
            time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }),
        method: "POST",
        mode: "cors",
        credentials: "include",
    });

    console.log("Status:", response.status, response.statusText);
    console.log("Headers:", Object.fromEntries(response.headers));

    const text = await response.text();
    console.log("\nResponse body:");
    try {
        const json = JSON.parse(text);
        console.log(JSON.stringify(json, null, 2));
    } catch {
        console.log(text);
    }
} catch (error) {
    console.error("Error making request:", error);
    process.exit(1);
}