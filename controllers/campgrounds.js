const Campground = require('../models/campground');

module.exports.newForm = (req, res) => {
    res.render('campgrounds/new');
}

module.exports.new = async (req, res) => {
    const camp = new Campground(req.body.campground);
    camp.author = req.user._id;
    await camp.save();
    req.flash('success', 'Successfully created campground!');
    res.redirect(`/campgrounds/${camp.id}`);
}

module.exports.all = async (req, res) => {
    const camps = await Campground.find({}).populate('author');
    res.render('campgrounds/index', { camps });
}

module.exports.show = async (req, res) => {
    //error: need 'reviews' inside the populate bracket
    const camp = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    console.log(camp);
    if (!camp) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { camp });

}

module.exports.editForm = async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp });
}

module.exports.edit = async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    req.flash('success', 'Successfully updated campground!');
    res.redirect(`/campgrounds/${id}`);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground!');
    res.redirect('/campgrounds');
}


