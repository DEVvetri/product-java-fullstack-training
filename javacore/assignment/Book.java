package assignment;

public class Book {
    private String title;
    private String author;
    private String isbn;
    
    public Book(String title, String author, String isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
   
    public void displayBookDetails() {
        System.out.println(title);
        System.out.println(author);
        System.out.println(isbn);
    }
   
    public static void main(String[] args) {
        Book myBook = new Book("Java Programming", "Herbert Schildt", "978-074327356");
        myBook.displayBookDetails();
    }
   }