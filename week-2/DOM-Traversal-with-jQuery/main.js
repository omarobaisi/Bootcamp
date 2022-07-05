$("button").click(function () {
  console.log(
    `Processor ID: ${$(this)
      .closest(".computer")
      .find(".processor")
      .attr("id")}`
  );
  console.log(`Computer’s data-id: ${$(this).closest(".computer").data().id}`);
  console.log(`BUS: ${$(this).closest(".computer").find(".BUS").text()}`);
});
