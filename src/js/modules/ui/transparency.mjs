export function setGroups(groups) {
  if (!groups) return;

  let groupData = groups.map(group => {
    return {
      group: group
    };
  });

  let directives = {
    ["modal-group"]: {
      text: function () {
        return this.group;
      },
      href: function () {
        return "#/"+this.group.replace(/ /g,'-');
      }
    }
  };

  Transparency.render(
    document.getElementById("modal-group-container"),
    groupData,
    directives,
    null
  );
};

export function setMainTopics(topics) {
  if (!topics) return;

  let mainTopicsData = topics.map(topic => {
    return {
      topic: topic[0]
    };
  });

  let directives = {
    ["modal-topic"]: {
      text: function () {
        return this.topic;
      },
      href: function () {
        return "#/topic/"+this.topic;
      }
    }
  };

  Transparency.render(
    document.getElementById("modal-topics-container"),
    mainTopicsData,
    directives,
    null
  );
}

export function setBooks(books) {
  if (!books) return;

  let booksData = books.map(book => {
    return {
      title: book.titles[0],
      cover: book.coverimages[book.coverimages.length - 1],
      description: book.authors
    };
  });

  let directives = {
    ["book-cover-image"]: {
      src: function () {
        return this.cover;
      }
    },
    ["book-title"]: {
      text: function () {
        return this.title;
      }
    },
    ["book-description"]: {
      text: function () {
        return this.description;
      }
    }
  };

  Transparency.render(
    document.getElementById("book-results-container"),
    booksData,
    directives,
    null
  );
}
