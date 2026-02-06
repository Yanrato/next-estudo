import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { ROOT_DIR_ALIAS } from "next/dist/lib/constants";

const ROOT_DIR_ = process.cwd(); 

export class JsonPostRepository implements PostRepository {

private async readFromDisk(){}

findAll(): Promise<PostModel[]>; 

}

export const jsonPostRepository = new JsonPostRepository();

console.log('ola mundo');