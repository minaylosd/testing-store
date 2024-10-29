<template>
  <div class="grid grid-cols-[2fr_1fr] gap-6">
    <div class="relative w-full">
      <img
        class="object-cover w-full h-auto outline-4 outline-white outline rounded-[20px]"
        src="/report-click.jpg"
        alt=""
      />
      <div
        class="absolute top-[130px] left-[400px] p-4 rounded-[20px] bg-white font-compact font-normal text-brand text-17 leading-6"
      >
        78% (7)
      </div>

      <div
        class="absolute top-[200px] left-[600px] p-4 rounded-[20px] bg-white font-compact font-normal text-brand text-17 leading-6"
      >
        22% (2)
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <div>
        <div class="p-4 flex flex-col gap-3 rounded-[20px] bg-white">
          <h4 class="font-medium leading-6 font-compact text-txt text-17">
            Карточка
          </h4>
          <p class="font-normal leading-6 font-compact text-brand text-17">
            78% (7)
          </p>
        </div>
      </div>

      <div>
        <div class="p-4 flex flex-col gap-3 rounded-[20px] bg-white">
          <h4 class="font-medium leading-6 font-compact text-txt text-17">
            Кнопка
          </h4>
          <p class="font-normal leading-6 font-compact text-brand text-17">
            22% (2)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
