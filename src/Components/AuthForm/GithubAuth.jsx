import React from 'react'
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Flex, Image, Text } from "@chakra-ui/react";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, fireStore } from "../../Firebase/firebase";

const GithubAuth = ({ prefix }) => {
    const [signInWithGithub, , ,error] = useSignInWithGithub(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore((state) => state.login);
    
    const handleGithubAuth = async () => {
        try {
            const newUser = await signInWithGithub();
            if (!newUser && error) {
                // console.log(newUser)
                showToast("Error", error.message, "error");
                console.log(error)
                return;
            }
            const userRef = doc(fireStore, "users", newUser.user.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                // login
                const userDoc = userSnap.data();
                console.log(userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            } 
            else {
                // signup
                const userDoc = {
                    uid: newUser.user.uid,
                    email: newUser.user.email,
                    username: newUser.user.email.split("@")[0],
                    fullName: newUser.user.displayName,
                    bio: "",
                    profilePicURL: newUser.user.photoURL,
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                await setDoc(doc(fireStore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            }
        } catch (error) {
            showToast("Error", error.message, "error");
            console.log(error)
        }
    }
    return (
		<Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} onClick={handleGithubAuth}>
			<Image src='/google.png' w={5} alt='Google logo' />
			<Text mx='2' color={"blue.500"}>
				{prefix} with GitHub
			</Text>
		</Flex>
	);
}

export default GithubAuth
