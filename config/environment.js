

const development = {
  name: 'development',
  asset_path: '/assets',
  session_cookie_key: 'blahsomething',
  db: 'codial_development',
  smtp: {
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: 'vikram.badhan@gmail.com',
          pass: '123'
      }
  },
  google_client_id: '1011483548736-fblb57j8rvftl4mhgj7i7v1m0jpkaqno.apps.googleusercontent.com', 
  google_client_secret: 'KQD9mXcBhjXc3kTgRfoOeQmR', 
  google_call_back_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret: 'codeial',
}


const production =  {
  name: 'production'
}



module.exports = development;