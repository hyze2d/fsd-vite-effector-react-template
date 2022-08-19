/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiResponse {
  /** @format int32 */
  code?: number;
  type?: string;
  message?: string;
}

export interface Category {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface Pet {
  /** @format int64 */
  id?: number;
  category?: Category;

  /** @example doggie */
  name: string;
  photoUrls: string[];
  tags?: Tag[];

  /** pet status in the store */
  status?: 'available' | 'pending' | 'sold';
}

export interface Tag {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface Order {
  /** @format int64 */
  id?: number;

  /** @format int64 */
  petId?: number;

  /** @format int32 */
  quantity?: number;

  /** @format date-time */
  shipDate?: string;

  /** Order Status */
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
}

export interface User {
  /** @format int64 */
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;

  /**
   * User Status
   * @format int32
   */
  userStatus?: number;
}

import { http } from './config';

/**
 * @title Swagger Petstore
 * @version 1.0.6
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService http://swagger.io/terms/
 * @baseUrl https://petstore.swagger.io/v2
 * @externalDocs http://swagger.io
 * @contact <apiteam@swagger.io>
 *
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 */

const routesConfig = http.createRoutesConfig({
  pet: {
    /**
     * No description
     *
     * @tags pet
     * @name UploadFile
     * @summary uploads an image
     * @request POST:/pet/{petId}/uploadImage
     * @secure
     */
    uploadFile: http.createRoute<
      { petId: number; data: { additionalMetadata?: string; file?: File } },
      ApiResponse
    >(dto => ({
      url: `/pet/${dto.petId}/uploadImage`,
      method: 'POST',
      data: dto.data,
      formData: true
    })),

    /**
     * No description
     *
     * @tags pet
     * @name AddPet
     * @summary Add a new pet to the store
     * @request POST:/pet
     * @secure
     */
    addPet: http.createRoute<Pet, any>({
      url: `/pet`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags pet
     * @name UpdatePet
     * @summary Update an existing pet
     * @request PUT:/pet
     * @secure
     */
    updatePet: http.createRoute<Pet, any>({
      url: `/pet`,
      method: 'PUT'
    }),

    /**
     * @description Multiple status values can be provided with comma separated strings
     *
     * @tags pet
     * @name FindPetsByStatus
     * @summary Finds Pets by status
     * @request GET:/pet/findByStatus
     * @secure
     */
    findPetsByStatus: http.createRoute<
      { status: ('available' | 'pending' | 'sold')[] },
      Pet[]
    >({
      url: `/pet/findByStatus`,
      method: 'GET'
    }),

    /**
     * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     *
     * @tags pet
     * @name FindPetsByTags
     * @summary Finds Pets by tags
     * @request GET:/pet/findByTags
     * @deprecated
     * @secure
     */
    findPetsByTags: http.createRoute<{ tags: string[] }, Pet[]>({
      url: `/pet/findByTags`,
      method: 'GET'
    }),

    /**
     * @description Returns a single pet
     *
     * @tags pet
     * @name GetPetById
     * @summary Find pet by ID
     * @request GET:/pet/{petId}
     * @secure
     */
    getPetById: http.createRoute<number, Pet>(petId => ({
      url: `/pet/${petId}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags pet
     * @name UpdatePetWithForm
     * @summary Updates a pet in the store with form data
     * @request POST:/pet/{petId}
     * @secure
     */
    updatePetWithForm: http.createRoute<
      { petId: number; data: { name?: string; status?: string } },
      any
    >(dto => ({
      url: `/pet/${dto.petId}`,
      method: 'POST',
      data: dto.data,
      formData: true
    })),

    /**
     * No description
     *
     * @tags pet
     * @name DeletePet
     * @summary Deletes a pet
     * @request DELETE:/pet/{petId}
     * @secure
     */
    deletePet: http.createRoute<number, any>(petId => ({
      url: `/pet/${petId}`,
      method: 'DELETE'
    }))
  },
  store: {
    /**
     * No description
     *
     * @tags store
     * @name PlaceOrder
     * @summary Place an order for a pet
     * @request POST:/store/order
     */
    placeOrder: http.createRoute<Order, Order>({
      url: `/store/order`,
      method: 'POST'
    }),

    /**
     * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
     *
     * @tags store
     * @name GetOrderById
     * @summary Find purchase order by ID
     * @request GET:/store/order/{orderId}
     */
    getOrderById: http.createRoute<number, Order>(orderId => ({
      url: `/store/order/${orderId}`,
      method: 'GET'
    })),

    /**
     * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     *
     * @tags store
     * @name DeleteOrder
     * @summary Delete purchase order by ID
     * @request DELETE:/store/order/{orderId}
     */
    deleteOrder: http.createRoute<number, any>(orderId => ({
      url: `/store/order/${orderId}`,
      method: 'DELETE'
    })),

    /**
     * @description Returns a map of status codes to quantities
     *
     * @tags store
     * @name GetInventory
     * @summary Returns pet inventories by status
     * @request GET:/store/inventory
     * @secure
     */
    getInventory: http.createRoute<void, Record<string, number>>({
      url: `/store/inventory`,
      method: 'GET'
    })
  },
  user: {
    /**
     * No description
     *
     * @tags user
     * @name CreateUsersWithArrayInput
     * @summary Creates list of users with given input array
     * @request POST:/user/createWithArray
     */
    createUsersWithArrayInput: http.createRoute<User[], any>({
      url: `/user/createWithArray`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags user
     * @name CreateUsersWithListInput
     * @summary Creates list of users with given input array
     * @request POST:/user/createWithList
     */
    createUsersWithListInput: http.createRoute<User[], any>({
      url: `/user/createWithList`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags user
     * @name GetUserByName
     * @summary Get user by user name
     * @request GET:/user/{username}
     */
    getUserByName: http.createRoute<string, User>(username => ({
      url: `/user/${username}`,
      method: 'GET'
    })),

    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name UpdateUser
     * @summary Updated user
     * @request PUT:/user/{username}
     */
    updateUser: http.createRoute<{ username: string; body: User }, any>(
      dto => ({
        url: `/user/${dto.username}`,
        method: 'PUT',
        data: dto.body
      })
    ),

    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name DeleteUser
     * @summary Delete user
     * @request DELETE:/user/{username}
     */
    deleteUser: http.createRoute<string, any>(username => ({
      url: `/user/${username}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags user
     * @name LoginUser
     * @summary Logs user into the system
     * @request GET:/user/login
     */
    loginUser: http.createRoute<{ username: string; password: string }, string>(
      {
        url: `/user/login`,
        method: 'GET'
      }
    ),

    /**
     * No description
     *
     * @tags user
     * @name LogoutUser
     * @summary Logs out current logged in user session
     * @request GET:/user/logout
     */
    logoutUser: http.createRoute<void, any>({
      url: `/user/logout`,
      method: 'GET'
    }),

    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name CreateUser
     * @summary Create user
     * @request POST:/user
     */
    createUser: http.createRoute<User, any>({
      url: `/user`,
      method: 'POST'
    })
  }
});

export { routesConfig };
