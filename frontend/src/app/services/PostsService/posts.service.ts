import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([])
  posts = this.posts$.asObservable()

  API_NEWS_POSTS_URL = '/api/posts/news/'
  API_USER_POSTS_URL = '/api/posts/'

  constructor() {
    void this.updatePosts(this.API_USER_POSTS_URL)
  }

  async getPostsResponse(apiUrl: string, page:number=1): Promise<IPostsRequest> {
    const urlParams = {
      "page": page.toString()
    }

    const url = `${apiUrl}?${new URLSearchParams(urlParams)}`
    console.log(url)
    const response = await fetch(url, {
      method: 'get',
    })

    const responseJson: IPostsRequest = await response.json()
    return Promise<IPostsRequest>.resolve(responseJson)
  }

  updatePosts(apiUrl: string, page:number=1) {
    this.getPostsResponse(apiUrl, page)
      .then(({posts}) => this.posts$.next(posts))
  }

  addPosts(apiUrl: string, page:number=1) {
    this.getPostsResponse(apiUrl, page)
      .then(({posts}) => {
        this.posts$.next([...this.posts$.getValue(), ...posts])
      })
  }
}
