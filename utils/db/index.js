import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

if (!admin.apps.length) {
	try {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL:
				"firebase-adminsdk-5df1g@andrewmundy3.iam.gserviceaccount.com",
		});
	} catch (error) {
		console.log("Firebase admin initialization error", error.stack);
	}
}
export default admin.firestore();
