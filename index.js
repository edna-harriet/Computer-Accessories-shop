<script>
		var circle = document.getElementById("circle");
		var arrowBtn = document.getElementById("arrowBtn");
		
		var rotateValue = circle.style.transform;
		var rotateSum;

		arrowBtn.onclick = function()
			{
				rotateSum = rotateValue + "rotate(90deg)";
				circle.style.transform = rotateSum;
				rotateValue = rotateSum;

			}
</script>



	

