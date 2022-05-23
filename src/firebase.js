// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  //...
  apiKey: "AIzaSyAcaCVT0C-YTOr-qn02mIc5KrWWWX4hBqk",
  authDomain: "fir-team-app.firebaseapp.com",
  projectId: "fir-team-app",
  storageBucket: "fir-team-app.appspot.com",
  messagingSenderId: "1081976880932",
  appId: "1:1081976880932:web:57c8eea5ff4beadb66bdb1",
  measurementId: "G-CLPMWQKD6K",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
