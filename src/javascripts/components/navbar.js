const buildNavbar = () => {
  const domString = `
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <i class="fa-lg fas fa-shield-alt"></i>
        GOT
      </a>
      <form>
          <div class="form-group">
            <label for="messageInput">Type Here</label>
            <input type="message" class="form-control" id="inputForm" aria-describedby="emailHelp">
            <button type="submit" class="btn btn-primary" id="sendButton">Send</button>
          </div>
      </form>
    </nav>
  `;
};

export default { buildNavbar };
