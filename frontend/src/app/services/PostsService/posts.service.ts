import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([])
  posts = this.posts$.asObservable()

  private API_NEWS_POSTS_URL = '/api/posts/news/'
  private API_USER_POSTS_URL = '/api/posts/'

  constructor() {
    void this.updatePosts(this.API_USER_POSTS_URL)
  }

  async updatePosts(apiUrl: string, page:number=1) {
    let newPosts: IPost[] = []

    try {
      const urlParams = {
        "page": page.toString()
      }

      const url = `${apiUrl}?${new URLSearchParams(urlParams)}`
      const response = await fetch(url, {
        method: 'get',
      })

      const responseJson = await response.json()
      newPosts = responseJson.posts

    }
    catch (error) {
      console.error(error)
    }

    console.log(newPosts)
    this.posts$.next(newPosts)
  }


}
