const BASE_URL = `http://localhost:3000/api/v1`;

// Handling fetch requests for sessions, users etc

// export const Auction = {
//     // Fetch all auctions from the server
//     all() {
//         return fetch(`${BASE_URL}/auctions`, {
//             credentials: "include"
//         }).then(res => res.json());
//     },

//     // Fetch a single auction
//     one(id) {
//         return fetch(`${BASE_URL}/auctions/${id}`, {
//             credentials: "include"
//         }).then(res => res.json());
//     },

//     // Create an auction
//     create(params) {
//         // Params is an object that represents an auction
//         return fetch(`${BASE_URL}/auctions`, {
//             method: 'POST',
//             credentials: "include",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(params)
//         }).then(res => res.json());
//     },

//     // Update an auction
//     update(id, params) {
//         return fetch(`${BASE_URL}/auctions/${id}`, {
//             method: 'PATCH',
//             credentials: "include",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(params)
//         }).then(res => res.json());
//     },

//     // Destroy an auction
//     destroy(id) {
//         return fetch(`${BASE_URL}/auctions/${id}`, {
//             method: 'DELETE',
//             credentials: "include"
//         }).then(res => res.json());
//     },
// }

// export const Bid = {
//     // Create a bid
//     create(id, params) {
//         return fetch(`${BASE_URL}/auctions/${id}/bids`, {
//             method: 'PATCH',
//             credentials: "include",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(params)
//         }).then(res => res.json());
//     }
// }

export const Technique = {
  create(params) {
            // Params is an object that represents an auction
        return fetch(`${BASE_URL}/techniques`, {
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
  },
    // Fetch a single technique
    one(id) {
        return fetch(`${BASE_URL}/techniques/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    },

    // Update a technique
    update(id, params) {
        return fetch(`${BASE_URL}/techniques/${id}`, {
            method: 'PATCH',
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },

    // Destroy a technique
    destroy(id) {
        return fetch(`${BASE_URL}/techniques/${id}`, {
            method: 'DELETE',
            credentials: "include"
        }).then(res => res.json());
    },

  }
}



export const Session = {
    // Create a session
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
          }).then(res => res.json());
    },
    destroy() {
        return fetch(`${BASE_URL}/session`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
}

export const User = {
    // Create a user
    current() {
        return fetch(`${BASE_URL}/users/current`, {
          method: "GET",
          credentials: "include"
        }).then(res => res.json());
      },
      create(params) {
        return fetch(`${BASE_URL}/users`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ user: params })
        }).then(res => res.json());
      }
}