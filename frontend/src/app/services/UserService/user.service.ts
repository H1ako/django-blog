import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: BehaviorSubject<UserType> = new BehaviorSubject<UserType>(null)
  user = this.user$.asObservable()

  constructor() {
    void this.updateUser()
  }

  async updateUser () {
    let userData: UserType = null

    try {
      const response = await fetch('/api/users/', {
        method: 'get',
      })

      const responseJson: IUserRequest = await response.json()
      userData = responseJson.user
    }
    catch (error) {
      console.error('User is not authenticated', error)
    }

    this.user$.next(userData)
  }
}
