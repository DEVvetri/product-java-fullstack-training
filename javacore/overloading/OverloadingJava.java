package overloading;
public  class OverloadingJava {
	OverloadingJava(String name) {
		System.out.println(name);
	}

	OverloadingJava(int a, int b) {
		System.out.println(a + b);
	}

	OverloadingJava(int n) {
		int fact = 1;
		for (int i = 1; i <= n; i++) {
			fact *= i;
		}
		System.out.println(fact);
	}

	public static void main(String[] args) {

		OverloadingJava objl = new OverloadingJava(5);
		OverloadingJava obj2 = new OverloadingJava("Valan");
		OverloadingJava obj3 = new OverloadingJava(5, 10);

	}

}
