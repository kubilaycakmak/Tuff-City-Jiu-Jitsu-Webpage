const BASE_URL = `http://localhost:3000/api/v1`;

// Handling fetch requests for sessions, users etc

export const Syllabus = {

  // Fetch a syllabus from the server
  one(id) {
    return fetch(`${BASE_URL}/syllabi/`, {
      credentials: "include"
    }).then(res => res.json());
  },
}
export const Video = {

  // Fetch all videos from the server
  all() {
    return fetch(`${BASE_URL}/videos`, {
      credentials: "include"
    }).then(res => res.json());
  },
}

export const Belt = {

  // Fetch all belts from the server
  all() {
    return fetch(`${BASE_URL}/belts`, {
      credentials: "include"
    }).then(res => res.json());
  },

  // // Fetch one belt from the server
  // one() {
  //   return fetch(`${BASE_URL}/belts`, {
  //     credentials: "include"
  //   }).then(res => res.json());
  // },
}

export const TechniqueType = {

  // Fetch all techniques from the server
  all() {
    return fetch(`${BASE_URL}/technique_types`, {
      credentials: "include"
    }).then(res=>{
      console.log(res);
      return(res.json())
      }
    );
  },

  find() {
    return fetch(`${BASE_URL}/technique_types_find`, {
      credentials: "include"
    }).then(res=>{
      console.log(res);
      return(res.json())
      }
    );
  },
}


export const Technique = {

  // Fetch all techniques from the server
  all() {
    return fetch(`${BASE_URL}/techniques`, {
      credentials: "include"
    }).then(res=>{
      console.log(res);
      return(res.json())
      }
    );
  },

  find() {
    return fetch(`${BASE_URL}/techniques_find`, {
      credentials: "include"
    }).then(res=>{
      console.log(res);
      return(res.json())
      }
    );
  },

  // Create a technique
  create(params) {
        console.log("##############", params)
            // Params is an object that represents a technique
        return fetch(`${BASE_URL}/techniques`, {
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)

        }).then(res=>res.json()

        );
  },
    // Fetch a single technique
    one(id) {
        return fetch(`${BASE_URL}/techniques/${id}`, {
            credentials: "include"
        }).then(res => res.json())
        .catch(console.error);
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