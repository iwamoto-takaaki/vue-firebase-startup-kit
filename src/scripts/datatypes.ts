export interface ChatRoom {
	id: string;
	owner: string;
	ownerName: string;
	title: string;
	timeCreated: firebase.firestore.Timestamp;
}

export interface Message {
	id: string;
	ownerName: string;
	owner: string;
	message: string;
	timeCreated: firebase.firestore.Timestamp;
}

export interface BlogArticle {
	id: string;
	owner: string;
	ownerName: string;
	title: string;
	timeCreated: firebase.firestore.Timestamp;
	content: any;
}

export interface TodoList {
	id: string;
	owner: string;
	ownerName: string;
	title: string;
	timeCreated: firebase.firestore.Timestamp;
}

export interface TodoItem {
	id: string;
	ownerName: string;
	owner: string;
	title: string;
	timeCreated: firebase.firestore.Timestamp;
	completed: boolean;
}
