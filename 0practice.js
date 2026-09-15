const transmission = "   nova.quill | cosmic-raven | 7   ";
const stationPrefix = "COSMIC";
const requiredClearance = "7";

const cleanTransmission = transmission.trim();
const firstDivider = cleanTransmission.indexOf("|");
const lastDivider = cleanTransmission.lastIndexOf("|");
const nameCode = cleanTransmission.slice(0, firstDivider).trim();
const codeName = cleanTransmission.slice(firstDivider + 1, lastDivider).trim();
const clearanceCode = cleanTransmission.slice(lastDivider + 1).trim();

const CodeName = nameCode.replace(".", " ").toUpperCase();
const formattedCodeName = codeName.replaceAll("-", " ").toUpperCase();
const nameSpace = CodeName.indexOf(" ");
const firstName = CodeName.slice(0, nameSpace);
const lastName = CodeName.slice(nameSpace + 1);

const callSign = firstName.charAt(0) + lastName[0] + CodeName.slice(-1);
const codeNameLength = formattedCodeName.length;
const ValidName = firstName.length > 0 && lastName.length > 0;
const ValidPrefix = formattedCodeName.startsWith(stationPrefix);
const ValidClearance = clearanceCode === requiredClearance;
const isBlocked = formattedCodeName.startsWith("DARK") || formattedCodeName.startsWith("ROGUE");
const accessGranted = ValidName && ValidPrefix && ValidClearance && !isBlocked;
const typeMismatchDetected = clearanceCode !== 7;

const border = "=".repeat(44);
const title = "GALACTIC ACCESS BADGE";
const decoratedTitle = ` ${title} `.padStart(34, "*").padEnd(44, "*");

if (accessGranted) {
	console.log(border);
	console.log(decoratedTitle);
	console.log(`AGENT: ${CodeName}`);
	console.log(`CODENAME: ${formattedCodeName}`);
	console.log(`CALL SIGN: ${callSign}`);
	console.log(`CODE NAME LENGTH: ${codeNameLength}`);
	console.log(`CLEARANCE: ${clearanceCode.padStart(3, "0")}`);
	console.log(`TYPE CHECK PASSED: ${!typeMismatchDetected}`);
	console.log("STATUS: ACCESS GRANTED");
	console.log(border);
} else {
	console.log(border);
	console.log(decoratedTitle);
	console.log(`AGENT: ${CodeName}`);
	console.log(`CODENAME: ${formattedCodeName}`);
	console.log(`CALL SIGN: ${callSign}`);
	console.log(`CODE NAME LENGTH: ${codeNameLength}`);
	console.log(`CLEARANCE: ${clearanceCode.padStart(3, "0")}`);
	console.log(`TYPE CHECK PASSED: ${!typeMismatchDetected}`);
	console.log("STATUS: ACCESS DENIED");
	console.log(border);
}

