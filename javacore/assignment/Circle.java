package assignment;

public class Circle {
	double radius;
	Circle(double radius)
	{
		this.radius = radius;
	}
	public double getradius()
	{
		return radius;
	}
	public void setradius(double radius)
	{
		this.radius = radius;
	}
	public void area()
	{
		double a =  Math.PI *radius*radius;
		System.out.println(a);
	}
	public void circumference()
	{
		double b = 2 * Math.PI * radius;
		System.out.println(b);
	}
	public static void main(String[] args) {
		Circle obj = new Circle(10.0);
		obj.area();
		obj.circumference();
		obj.setradius(12.0);
		obj.area();
		obj.circumference();
	}

}