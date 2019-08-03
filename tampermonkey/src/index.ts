import * as $ from "jquery";

const currentUrl = new URL(window.location.toString());
if(currentUrl.host == "www.instagram.com" && currentUrl.searchParams.has("mode")){
	const sleep = async (duration: number) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve()
			}, duration)
		})
	}

	$(async function() {
		$(".glyphsSpriteMore_horizontal__outline__24__grey_9").trigger("click");
		await sleep(200);
		$(".aOOlW:contains('Block this user')").trigger("click");
		await sleep(200);
		$(".aOOlW:contains('Block')").trigger("click");
	});



}
