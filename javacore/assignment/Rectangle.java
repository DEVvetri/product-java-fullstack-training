package assignment;

public class Rectangle {
	int width;
	int height;
	Rectangle(int width,int height)
	{
		this.width = width;
		this.height = height;
	}
	void area()
	{
		int area1 = width*height;
		System.out.println(area1);
	}
	void perimeter()
	{
		int area2 = 2*(width*height);
		System.out.println(area2);
	}

	public static void main(String[] args) {
		Rectangle obj = new Rectangle(5,10);
		obj.area();
		obj.perimeter();

	}

}
